import React from 'react'
import '../styling/aboutusstyle.css'

export default function AboutUsBody() {
    return (
        <div>
            <section style={{ 'padding-top': '20px', 'margin-top': '10px' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-lg-6">
                            <img src="https://images.unsplash.com/photo-1571035421452-1714bae914b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBhc3RhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&h=550&w=500&q=60"
                                class="rounded float-left img-fluid img-thumbnail" alt="..." />
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <h1 class="text-center text-capitalize" style={{ 'margin-top': '20px' }}>About Us</h1>
                            <br></br>
                            <p class="text-primary"
                                style={{ 'font-size': '25px', 'font-family': "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit provident nisi odio nemo
                                distinctio ipsam a unde itaque id accusantium esse animi pariatur excepturi odit aspernatur
                                minima quasi, aperiam atque qui consequuntur dolore placeat voluptas. Recusandae culpa
                                praesentium aut harum sunt officiis amet rem voluptatem ipsum, hic nulla magnam nam, voluptas
                        corporis saepe voluptat.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div style={{ "overflow": "hidden", "margin-top": "50px" }}>
                    <div class="row brandInfo text-center">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <img src="https://assets.abfrlcdn.com/resources/img/peterengland/aboutus/map-icon.jpg"
                                class="img-responsive b-loaded" alt="TOWNS &amp; CITIES" title="TOWNS &amp; CITIES" />
                            <h4>150</h4>
                            <p>Towns &amp; Cities</p>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <img src="https://assets.abfrlcdn.com/resources/img/peterengland/aboutus/ware-house.jpg"
                                class="img-responsive b-loaded" alt="BRAND OUTLETS" title="BRAND OUTLETS" />
                            <h4>&nbsp;&nbsp;700+</h4>
                            <p>Brand Outlets</p>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <img src="https://assets.abfrlcdn.com/resources/img/peterengland/aboutus/Brand-outlet.jpg"
                                class="img-responsive b-loaded" alt="MULTI-BRAND OUTLETS" title="MULTI-BRAND OUTLETS" />
                            <h4>&nbsp;&nbsp;3000+</h4>
                            <p>Multi-Brand Outlets</p>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <img src="https://assets.abfrlcdn.com/resources/img/peterengland/aboutus/Customers.jpg"
                                class="img-responsive b-loaded" alt="CUSTOMER BASE" title="CUSTOMER BASE" />
                            <h4>4M</h4>
                            <p>Customer Base</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="card mb-4 text-primary"
                    style={{ 'border':'none','max-width': '1400px', 'height': 'auto', 'margin-top': '80px', 'font-size': '40px', 'margin-left': '20px', 'margin-right': '20px' }}>
                    <div class="row no-gutters">
                        <div class="col-md-4" style={{'padding':'20px'}}>
                            <img src="https://st.depositphotos.com/1037987/2504/i/600/depositphotos_25045451-stock-photo-businessman-working-at-desk-in.jpg"
                                class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Owner Name 1</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-light">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="card mb-4 text-primary"
                    style={{ 'border':'none','max-width': '1400px', 'height': 'auto', 'margin-top': '80px', 'font-size': '40px', 'margin-left': '20px', 'margin-right': '20px' }}>
                    <div class="row no-gutters">
                       
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Owner Name 2</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-light">Last updated 3 mins ago</small></p>
                            </div>

                        </div>
                        <div class="col-md-4" style={{'padding':'20px'}}>
                            <img src="https://st.depositphotos.com/1037987/2504/i/600/depositphotos_25045451-stock-photo-businessman-working-at-desk-in.jpg"
                                class="card-img" alt="..." />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
