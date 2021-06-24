import preloader from '../common/images/preloader.svg';

const Preloader = () => {
    return <div style={{backgroudColor: '#FFCC00', marginLeft: '600px', marginTop: '200px'}}>
    <img src={preloader} alt="preloader"/>
    </div>
}

export default Preloader;