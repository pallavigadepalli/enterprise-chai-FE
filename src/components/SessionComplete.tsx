
const KEY_POINTS = [
    "Overview of product features and benefits.",
    "Explanation of how product enhances customer success management.",
    "Demonstration of real-time guidance and actionable insights provided by the tools.",
    "Discussion on the potential integration with existing workflows and tools."
]

export default function SessionComplete({summaryInfo}) {
    return (
        <div className="flex-col w-full">
            <main className="px-8  gap-y-8 grid bg-darkViolet border-2 pt-3.5 rounded-lg shadow-violetShadow">
                <div className="flex justify-between items-center">
                    <span>
                        <span className="text-primarySmall text-medium mr-2">Session No:</span>
            0125
                    </span>
                    <span>
                        <span className="text-primarySmall mr-2">Customer company name:</span>
            JP Morgan</span>
                    <span>
                        <span className="text-primarySmall mr-2">Customer point of contact:</span>
            Ms. Wilson</span>
                </div>
                <div>
                    <h5 className="text-lg text-primarySmall font-bold">Session Summary:</h5>
                    <p>
                        {summaryInfo.description}
                    </p>
                    <ul className="list-disc px-8 pt-4">
                        {KEY_POINTS.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5 className="text-lg text-primarySmall font-bold">Areas of Improvement:</h5>
                    <ul className="list-disc px-8 pt-4">
                        <li><span className="text-bold text-grayDarkest pl-1">Enhanced Engagement:</span> Encourage more active participation and questions from stakeholders to deepen understanding.</li>
                        <li><span className="text-bold text-grayDarkest pl-1">Clarity on Integration:</span> Provide clearer explanations and examples for seamless integration to alleviate any concerns.</li>
                        <li><span className="text-bold text-grayDarkest pl-1">Define Action Items:</span> Clearly outline specific next steps and actions to maintain momentum and ensure progress.</li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-lg text-primarySmall font-bold">Overall Session Score:
                        <span className="text-greenDark pl-1">8 out of 10</span>
                    </h5>
                    <p className="pt-4 pb-10">
          Based on the engagement level, clarity of communication, and relevance of discussion topics, the Post-Sale Stakeholder Kickoff & Onboarding Meeting receives a score of 8 out of 10. While the session was informative and well-structured, there is room for improvement in fostering deeper engagement and addressing potential integration challenges.
                    </p>
                </div>
            </main>
        </div>
    )
}
