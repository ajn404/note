const HTTPRequestMethod = {
    GET:'GET',
    POST:'POST'
}as const;
type ValueOf<T> = T[keyof T];
type HTTPRequestMethodType = ValueOf<typeof HTTPRequestMethod>;
async function fetchJSON(
    url:string,
    methods: HTTPRequestMethodType,
){
    const response = await fetch(url,{methods});
    return response.json();
}

fetchJSON("http://",HTTPRequestMethod.GET).then(res=>{});