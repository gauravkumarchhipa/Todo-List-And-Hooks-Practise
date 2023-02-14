import { useEffect } from 'react';

const useCustomeHooks2 = (count) => {
    useEffect(()=>{
        if(count > 0){
            document.title = `Todo (${count})`
        }else{
            document.title = `Todo`
        }
    },[count]);
}

export default useCustomeHooks2