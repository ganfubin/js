/**
 * 文件不可运行，只是列出方法，后续补充
 */
var json2csv = require('json2csv');
var fs = require('fs');

//保存csv数据 针对json2csv fields得很csvData里面的字段相对应
var fields = ['id', 'nationAccount', 'nationPass', 'localAccount', 'localPass'];
var csv = json2csv({ data: csvData, fields: fields });
fs.writeFile('csv.csv', csv, function(err) {
  if (err) throw err;
  console.log('file saved');
});

//保存json数据
fs.writeFile('tax.json', JSON.stringify(csvData), function(err) {
  if (err) throw err;
  console.log('file saved');
});
console.log(csvData);