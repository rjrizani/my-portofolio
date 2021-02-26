import SimpleCards from 'components/Cards/SimpleCards'
import React from 'react'
import Badge from 'reactstrap/lib/Badge'
import Button from 'reactstrap/lib/Button'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import Col from 'reactstrap/lib/Col'
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'

const ThreeCards = () => {
    return (
        <section className="section section-lg pt-lg-0 mt--100">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <SimpleCards
                    icon='spaceship'
                    color='primary'
                    title='Frontend'
                    description='Check my Frontend'
                    badges={['React','Javascript','css','html','material-ui','argon desain-sistem']}
                    />
                </Col>
                <Col lg="4">
                <SimpleCards
                    icon='ui-04'
                    color='success'
                    title='Backend'
                    description='Check my Backend'
                    badges={['NodeJs','Express','MongoDb','SQL']}
                    />
                </Col>
                <Col lg="4">
                <SimpleCards
                    icon='palette'
                    color='warning'
                    title='Design and Copywriting'
                    description='Look at my Design and Copywriting'
                    badges={['Canva','PixelLab','Photoshop']}
                    />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default ThreeCards
