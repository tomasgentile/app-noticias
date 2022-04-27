import { Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';

const ListadoNoticias = () => {
    const { noticias, totalNoticias, hanldeChangePagina, pagina } = useNoticias();
    const totalPaginas = Math.ceil(totalNoticias / 20);

    return (
        <>
            {(totalNoticias === 0) ? (
                <Alert severity='info'>No encontramos noticias con los parametros solicitados</Alert>
            ) : (
                <>
                    <Grid
                        marginTop={5}
                        container
                        spacing={2}
                    >
                        {noticias.map(noticia => (
                            <Noticia
                                key={noticia.url}
                                noticia={noticia}
                            />
                        ))}
                    </Grid>
                    <Stack
                        sx={{ marginY: 5 }}
                        spacing={2}
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Pagination
                            count={totalPaginas}
                            color="primary"
                            onChange={hanldeChangePagina}
                            page={pagina}
                        />
                    </Stack>
                </>
            )}
        </>
    )
}

export default ListadoNoticias