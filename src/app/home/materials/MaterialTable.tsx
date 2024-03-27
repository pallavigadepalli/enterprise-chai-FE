import Table from "@/components/Table";
import  moment from 'moment';

interface  MaterialsTableProps {
    data: Array<any>;
}
export default function MaterialsTable({data}: MaterialsTableProps) {
    const _data = data.map((item) => {

        return {
            company: item.company,
            product: item.product,
            tags: item.tags,
            uploaded_at: moment(item.uploaded_at).format('DD-MMM-YYYY hh:mm a')
        }
    })
    return (<Table
        title={'Call summary'}
        columns={[
            {title: 'Company', key: 'company', width: '20%'},
            {title: 'Product', key: 'product', width: '20%'},
            {title: 'Tags', key: 'tags', width: '20%'},
            {title: 'Date', key: 'uploaded_at', width: '20%'},
        ]}
        data={_data || []}
    />)
}
