import Table from "@/components/Table";
import  moment from 'moment';

interface  MaterialsTableProps {
    data: Array<any>;
}
export default function MaterialsTable({data}: MaterialsTableProps) {
    const _data = data.map((item) => {

        return {
            company: item.company,
            name: item.name,
            tags: item.tags,
            created_at: moment(item.created_at).format('DD-MMM-YYYY hh:mm a'),
            documents: item.documents
        }
    })
    let transformedProductsArray = [];

    _data.forEach(function(product) {
        console.log(product);
        product.documents.forEach(function(document) {
            var documentWithName = {
                "id": product.id,
                "name": product.name,
                "created_at": product.created_at,
                "company": product.company,
                "tags": product.tags,
                "document": document.file.split('/').pop() // Obtener el nombre del documento desde la URL
            };
            transformedProductsArray.push(documentWithName);
        });
    });
    console.log(transformedProductsArray);

    return (<Table
        title={'Recent Documents'}
        columns={[
            {title: 'Company', key: 'company', width: 'w-5'},
            {title: 'Name', key: 'name', width: 'w-5'},
            {title: 'Tags', key: 'tags', width: 'w-5'},
            {title: 'Document', key: 'document', width: 'w-5'},
            {title: 'Date', key: 'created_at', width: 'w-5'},
        ]}
        data={transformedProductsArray || []}
    />)
}
