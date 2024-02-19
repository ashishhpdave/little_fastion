import OurTeamCart from "../ourTeamMain"

const OurTeamData = [
    {
        img : "images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg",
        h5 : "Don",
        strong : "Product,v5"
    },
    {
        img : "images/people/portrait-british-woman.jpeg",
        h5 : "Don",
        strong : "Product,v5"
    },
    {
        img : "images/people/beautiful-woman-face-portrait-brown-background.jpeg",
        h5 : "Don",
        strong : "Product,v5"
    },
]
function OurTeam(){
    return(
        <>
                 <section className="team section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <h2 className="mb-5">Meet our <span>team</span></h2>
                        </div>

                        {
                            OurTeamData.map(function(item){
                                return(
                                    <>
                                    <OurTeamCart img={item.img} h5={item.h5} strong={item.strong}/>
                                    </>
                                )
                            })
                        }              

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam