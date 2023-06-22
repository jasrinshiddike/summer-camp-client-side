import { Parallax } from 'react-parallax';

const Cover = ({img, title}) => {
    return (
        <Parallax
        bgImage={img}
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: percentage * 500,
                    height: percentage * 500,
                }}
            />
        )}
    >
        <div className="hero h-[600px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;