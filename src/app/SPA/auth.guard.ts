import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanDeactivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const routes =inject(Router)
  const token=localStorage.getItem('Tokens')
  if(!token) 
    {
      return false
      alert('unauthorized login')
      routes.navigate(['/reg'])
    }
    return true
}
export const authchild:CanActivateChildFn = () => {
   
  const user=JSON.parse(localStorage.getItem('user') || '{}')
   if(user.name==='Hiluru')
    {
    return true                    
    }
   
  alert('Unauthorized access to child route');
  const router = inject(Router);
  router.navigate(['/login']);
  return false;
}

export const deactive:CanDeactivateFn<any> =(component) =>{

  if(component.isFormDirty)
    {
      return confirm("your not register ")
    }
 return true

}
