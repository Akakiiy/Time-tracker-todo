import './Preloader.css';

const Preloader = ({preloaderBg}) => {
    return (
        <div className={`${preloaderBg}`}>
            <div className="scene">
                <div className="cubeWrapper">
                    <div className="cube">
                        <div className="cubeFaces">
                            <div className="cubeFace shadow"></div>
                            <div className="cubeFace bottom"></div>
                            <div className="cubeFace top"></div>
                            <div className="cubeFace left"></div>
                            <div className="cubeFace right"></div>
                            <div className="cubeFace back"></div>
                            <div className="cubeFace front"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Preloader;