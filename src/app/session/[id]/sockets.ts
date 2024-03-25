const socketURL = process.env.NEXT_PUBLIC_WS;



export const handleStartCapture = async ({
    tabRecorder,
    selectedDeviceId,
    setMicrophoneMessages,
    setTabMessages,
    setAssistantMessages,
    conversationId
}) => {
    // add conversationId to the socketURL

    const microphoneAudioSocket = socketURL + '/listenmic?session=' + conversationId;
    const tabAudioSocket = socketURL + '/listentab?session=' + conversationId;
    const assistantSocket = socketURL + '/result?session=' + conversationId;

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
