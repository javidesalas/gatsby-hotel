import { graphql, useStaticQuery } from 'gatsby'

const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsHabitacion {
                nodes {
                    titulo
                    id
                    slug
                    descripcion
                    imagen {
                        fluid(maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        id: habitacion.id, 
        slug: habitacion.slug,
        descripcion: habitacion.descripcion,
        imagen: habitacion.imagen,
            
   }))


}

export default useHabitaciones