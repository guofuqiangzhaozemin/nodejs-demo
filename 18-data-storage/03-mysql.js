#!/usr/bin/env node
const mysql=require('mysql2/promise'),
      log=console.log;

let con=mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'ddd',
  database:'test'
});

async function getAreas(){
  const sql='select * from areas';
  let [rows]=await con.execute(sql);
  return rows;
  //execute sql
}
async function addAreas(areaName){
  const sql=`insert into areas(area_name) values('${areaName}')`;
  let [rows]=await con.execute(sql);
  return rows;
}
async function updateArea(oldName,newName){
    const sql=`update areas set areas_name= '${newName}' where area_name '${oldName}' `;
    let [rows]=await con.execute(sql);
    return rows;

}
async function delArea(areaName){
    const sql=`delete from areas where area_name='${areaName}' `;
    let [rows]=await con.execute(sql);
    return rows;

}



(async function (){
  await addAreas('英国');
  //await updateArea('英国','大不列颠');
  //await delArea('英国');
  log(await getAreas());
})();

