import React, { Component } from 'react';
import Center from 'react-center';
import { CardStack, Card } from 'react-cardstack';

export default class Donation extends Component {

    render(){
        const people = [{
            background: '#ccb086',
            imgSrc: require('../assets/empowerandexcellogo.png'),
            imgBorderColor: '#694611',
            name: 'Empower and Excel',
            title: 'Dancing Queens donated $4000',
            role: 'Empower and Excel conducts many projects to better the lives of the less fortunate, and they encourage local kids to give back to the community in various ways, ranging from tutoring to serving at homeless shelters. To learn more, visit empowerandexcel.org.',
            endorsement: '"When we see young adults coming forward with thought of doing something good to the community, we feel very proud of them and makes our mission more meaningful.  “Dancing Queens” (Divija Hasteer & Trina Chatterjee) are such inspiring teens who raised $2,000 by teaching chess which is their interest and passion. They doubled their funds by company matching to $4,000.  Dancing Queens chose to donate funds to Empower And Excel as they wanted children and youth in communities who are in need to benefit and do their best to help people in whatever format possible. Empower And Excel is extremely happy to see these self-driven teens, who are good role models and have the ability to inspire not only their peers but anyone else. We are very grateful to receive their donation." ~Ayesha Charagulla (Co-Founder, President)'
        }, {
            background: '#694611',
            imgSrc: require('../assets/adahacks.png'),
            imgBorderColor: '#ccb086',
            name: 'Adahacks I',
            title: 'Dancing Queens donated $750',
            role: "Organized by the Saint Francis High School Girls Who Code club at Google, AdaHacks promotes female participation in coding (as an all-girls hackathon). To make the first annual AdaHacks a reality, Dancing Queens supported the cause as a Silver Sponsor. To find out more, visit www.adahacks.com.",
            endorsement: '"Our hackathon would not have been possible without the very generous donation of Dancing Queens. We absolutely loved uniting with them, making us two organizations devoted to increasing female passion in STEM." ~AdaHacks I Organizing Team'
        }];

        const ProfilePicture = ({ imgSrc, borderColor }) => (
            <img
                style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '100%',
                    border: `3px solid ${borderColor}`,
                }}
                src={imgSrc}
                alt=''
            />
        );

        const DetailsRow = ({ icon, title, summary }) => {
            const renderSummary = () => {
                if (summary)	return (
                    <p style={{ fontWeight: 300, lineHeight: 1.45 }}>
                        {summary}
                    </p>
                );
                return null;
            };

            return (
                <div style={styles.detailsRow.row}>
                    <span
                    className={`icon ${icon}`}
                    style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}
                    />
                    <div style={{ width: '80%' }}>
                        <h2 style={styles.detailsRow.title}>
                            {title}
                        </h2>
                        {renderSummary()}
                    </div>
                </div>
            );
        };

        const TeamMemberCard = (props) => (
            <div style={{ position: 'absolute', top: 0 }} onClick={props.onClick}>
                <header style={styles.cardHeader} className='card-header-details'>
                    <ProfilePicture imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
                    <div>
                        <h1 style={styles.headerName}>{props.name}</h1>
                        <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.title}</h3>
                    </div>
                </header>

                <div style={{color: '#fff'}}>
                    <DetailsRow
                        icon='icon ion-ios-paper-outline'
                        title='About'
                        summary={props.role}
                    />
                    <DetailsRow
                        icon='icon ion-ios-paper-outline'
                        title='A Few Words'
                        summary={props.endorsement}
                    />
                </div>
        </div>
        );

        const styles = {
            cardHeader: {
                display: 'flex',
                height: '375px',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                color: '#fff',
            },
            headerName: {
                margin: 0,
                fontWeight: 500,
                fontSize: '25px',
                textAlign: 'right'
            },
            headerTitle: {
                margin: '4px 0 0',
                fontWeight: 300,
                fontSize: '17px',
                opacity: 0.8,
                textAlign: 'right'
            },
            detailsRow: {
                row: {
                    width: '100%',
                    padding: '0 20px',
                    display: 'flex',
                    alignItems: 'center',
                    margin: '25px 0',
                },
                icon: {
                    display: 'block',
                    width: '25px',
                    height: '30px',
                    margin: '0 20px 0 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
                    textAlign: 'center',
                    fontSize: '22px',
                },
                title: {
                    fontWeight: 500,
                    fontSize: '20px',
                    margin: 0,
                    fontStyle: 'italic',
                },
            },
        };

        return(
            <Center>
                <div>
                    <br/><br/><br/>
                    <CardStack
                        height={750}
                        width={1000}
                        background="#f8f8f8"
                        hoverOffset={25}>

                        {people.map((person, i) =>
                            <Card
                                key={i}
                                background={person.background}>
                                <TeamMemberCard {...person} />
                            </Card>
                        )}
                    </CardStack>
                    <br/><br/><br/>
	            </div>
            </Center>
        )
    }
}