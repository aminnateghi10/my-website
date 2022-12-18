
const Preloader = () => {
    return (
        <>
            <div id="preloader" className="light">
                <div className="outer">
                    {/* Google Chrome */}
                    <div className="infinityChrome">
                        <div/>
                        <div/>
                        <div/>
                    </div>
                    {/* Safari and others */}
                    <div className="infinity">
                        <div>
                            <span/>
                        </div>
                        <div>
                            <span/>
                        </div>
                        <div>
                            <span/>
                        </div>
                    </div>
                    {/* Stuff */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        className="goo-outer"
                    >
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation={6} result="blur"/>
                                <feColorMatrix
                                    in="blur"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                    result="goo"
                                />
                                <feBlend in="SourceGraphic" in2="goo"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Preloader;