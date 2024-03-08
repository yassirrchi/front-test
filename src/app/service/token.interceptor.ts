import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  let storedUserData:any
  const localData=localStorage.getItem("userInfos")
  if(localData==null){
    return next(req)
  }

  if(localData!=null){
    storedUserData=JSON.parse(localData)

  
  }
  const cloneReq=req.clone(
    {
      setHeaders:{
        Authorization:`Bearer ${storedUserData.token}`
      }
    }
  )

  return next(cloneReq);
};
