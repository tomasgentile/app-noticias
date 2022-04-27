import { FormControl, InputLabel, Select, MenuItem, Grid, Button, TextField } from '@mui/material';
import { useState } from 'react';
import useNoticias from '../hooks/useNoticias';

const categorias = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
];
const paises = [
    { value: 'ar', label: 'Argentina' },
    { value: 'it', label: 'Italia' },
    { value: 'mx', label: 'México' },
    { value: 'us', label: 'Estados Unidos' },
    { value: 'br', label: 'Brasil' },
    { value: 'cu', label: 'Cuba' }
];

const Formulario = () => {
    const [busqueda, setBusqueda] = useState('');
    const { categoria, handleChangeCategoria, handleChangePais, pais, setPalabra } = useNoticias();

    const handleChangePalabra = (e) => {
        e.preventDefault();
        setPalabra(busqueda);
    }

    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={2}
        >
            <Grid item x={12} md={3} lg={4}>
                <form>
                    <FormControl fullWidth>
                        <InputLabel>Categoría</InputLabel>
                        <Select
                            label='Categoría'
                            onChange={handleChangeCategoria}
                            value={categoria}
                        >
                            {categorias.map(categoria => (
                                <MenuItem
                                    key={categoria.value}
                                    value={categoria.value}
                                >
                                    {categoria.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </form>
            </Grid>
            <Grid item x={12} md={3} lg={4}>
                <form>
                    <FormControl fullWidth>
                        <InputLabel>País</InputLabel>
                        <Select
                            label='País'
                            onChange={handleChangePais}
                            value={pais}
                        >
                            {paises.map(country => (
                                <MenuItem
                                    key={country.value}
                                    value={country.value}
                                >
                                    {country.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </form>
            </Grid>
            <Grid item x={12} md={5} lg={4}>
                <form
                    onSubmit={e => handleChangePalabra(e)}
                >
                    <FormControl>
                        <TextField
                            label='Palabra Clave'
                            name='palabra'
                            value={busqueda}
                            type='text'
                            onChange={e => setBusqueda(e.target.value)}
                        />
                    </FormControl>
                    <Button
                        type='submit'
                        variant='outlined'
                        sx={{ ml: '15px', p: '15px' }}
                    >Buscar</Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default Formulario

