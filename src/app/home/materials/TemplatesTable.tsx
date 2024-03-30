export  default function TemplatesTable({data}) {
    // render the templates grouped by category
    // and display the templates in a list
    const grouped = data.templates.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = []
        }
        acc[item.category].push(item)
        return acc
    }
    , {})
    return (
        <div>
            {
                Object.keys(grouped).map((category) => {
                    return (
                        <div key={category}>
                            <p className={'text-base font-bold mb-3'}>{category}</p>
                            <div className={'p-1 px-2'}>
                                {
                                    grouped[category].map((item) => {
                                        return (
                                            <li key={item.id} className={`text-sm ${item['is_required'] ? 'text-greenLight600' : ''}`}>
                                                <a
                                                    href={`${process.env.NEXT_PUBLIC_BACKEND}/media/${item.file.split('/').pop()}`}
                                                    target={'_blank'}>{item.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
