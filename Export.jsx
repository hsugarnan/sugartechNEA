import exportFromJSON from 'export-from-json'
 
const data = [{ foo: 'foo'}, { bar: 'bar' }]
const fileName = 'download'
const exportType =  exportFromJSON.types.xls




function Export(){
    exportFromJSON({ data, fileName, exportType })

}


