const socketURL = process.env.NEXT_PUBLIC_WS;
const microphoneAudioSocket = socketURL + '/listenmic';
const tabAudioSocket = socketURL + '/listentab';
const assistantSocket = socketURL + '/result';


export const handleStartCapture = async ({
    tabRecorder,
    selectedDeviceId,
    setMicrophoneMessages,
    setTabMessages,
    setAssistantMessages
}) => {
    const microphoneWS = new WebSocket(microphoneAudioSocket);
    const tabWS = new WebSocket(tabAudioSocket);
    const assistantWS = new WebSocket(assistantSocket);

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: { deviceId: selectedDeviceId } });
        const micRecorder = new MediaRecorder(stream);

        micRecorder.addEventListener('dataavailable', evt => {
            if (evt.data.size > 0 && microphoneWS.readyState === WebSocket.OPEN) {
                microphoneWS.send(evt.data);
            }
        });

        tabRecorder.addEventListener('dataavailable', evt => {
            if (evt.data.size > 0 && tabWS.readyState === WebSocket.OPEN) {
                tabWS.send(evt.data);
            }
        })

        microphoneWS.onopen = () => {
            micRecorder.start(100)
        };
        microphoneWS.onerror = (error) => {
            throw new Error('WebSocket error:', error);
        };
        microphoneWS.onmessage = (event) => {
            setMicrophoneMessages(_value => [..._value, event.data]);
        }
        tabWS.onopen = () => {
            tabRecorder.start(100)
        };
        tabWS.onerror = (error) => {
            throw new Error('WebSocket error:', error);
        };
        tabWS.onmessage = (event) => {
            setTabMessages(_value => [..._value, event.data]);
        }
        assistantWS.onmessage = (event) => {
            setAssistantMessages(_value => [..._value, event.data]);
        }
        assistantWS.onerror = (error) => {
            throw new Error('WebSocket error:', error);
        }
    } catch (error) {
        console.error('Error capturing audio:', error);
    }
};
