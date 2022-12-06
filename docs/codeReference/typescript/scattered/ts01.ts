//advanced typescript fundamental
type SerialicationOptions = {
    formatting?:{
      indent?:number;
    };
  };
  
  function serializeJSON(value:any,options?: SerialicationOptions){
    const indent = options?.formatting?.indent??2;
    return JSON.stringify(value,null,indent)
  }
  
  const user = {
    name:"ajn404 n-gray-moon",
    bilibili:'狗粮长'
  }
  
  const json = serializeJSON(user,{
    formatting:{
      indent:0
    }
  });

  console.log(json);