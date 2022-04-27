import NoticiasContext from '../context/NoticiasProvider';
import { useContext } from 'react';

const useNoticias = () => {
    return useContext(NoticiasContext)
}

export default useNoticias;

