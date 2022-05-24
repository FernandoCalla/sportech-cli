import Tournaments from '../../../../data/torneos.json'

const TorneoDetalle=()=>{
    const {tournaments}=Tournaments
    const [torneo]=tournaments
    return <>
        <h1 className="mb-6 text-2xl md:text-4xl">
        Torneos
        </h1>
    </>
}

export default TorneoDetalle