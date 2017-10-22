import React, { Component } from 'react'
import { Sidebar, Form, Feature, Footer } from '../../theme'
import { Map } from '../custom'
export default (props) => {

  return (
    <div>

      <div className="nav-container nav container--sidebar">
        <div className="nav-sidebar-column" style={{padding: 0}}>
          <Map
            zoom={14}
            center={{lat:40.728199, lng:-73.9894738}}
            containerElement={<div style={{height:100+'%'}} /> }
            mapElement={<div style={{height:100+'%'}} /> }
          />
        </div>
      </div>

      <div className="main-container">

        <section className="text-center">
          <div className="container">
            <div className="row">
              <h2 className="type--upercase">
                <em>
                  <strong>Training tips, meal plans and more.</strong>
                </em>
              </h2>
              <Form />
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 className="type--uppercase">
                  <em>
                    <strong>Hello,
                      <br className="hidden-sm hidden-xs" /> Strength & Agility.</strong>
                  </em>
                </h1>
                <p className="lead">
                  Offering two main training focusses &mdash; our fitness professionals work alongisde small groups to routinely set and smash goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-5 col-md-offset-1">
                <Feature image="images/fitness-3.jpg" title="Strength" text="Our strength training programs focus on dedication..." />
              </div>
              <div className="col-sm-6 col-md-5">
                <Feature image="images/fitness-4.jpg" title="Agility" text="Our" />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}