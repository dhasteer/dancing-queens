import React, { Component } from 'react';
import Center from 'react-center';
import { CardStack, Card } from 'react-cardstack';

export default class Instructor extends Component {

    render(){
        const people = [{
            background: '#ccb086',
            imgSrc: require('../assets/divija-pfp.png'),
            imgBorderColor: '#694611',
            name: 'Divija Hasteer',
            title: 'Co-Founder, Instructor',
            rating: '1840',
            role: 'Divija, an incoming college freshman at UC Berkeley, discovered chess at the age of 6, and in her long chess journey, she has earned a seat in the Top 100 Girls Under Age 21 in the United States. Her tactical flare has caused many brutal losses and many glorious victories. She won the 2016 US Class Champ, and was the representative for California at the NGTOC. She is not only well-versed with the game, but she is also equipped with the skill set to successfully teach others. Her outgoing, fun-loving personality ensures that she can spread her passion of chess to others in the best manner possible.'
        }, {
            background: '#694611',
            imgSrc: require('../assets/trina-pfp.png'),
            imgBorderColor: '#ccb086',
            name: 'Trina Chatterjee',
            title: 'Co-Founder, Instructor',
            rating: '1930',
            role: "Trina Chatterjee is an incoming freshman at UT Austin. She learned how to play chess when she was ten years old and has won several tournaments including the 2015 CalChess State Championship and the 2016 Susan Polgar National Chess Championship. In addition, her USCF rating of 1930 places her in the Top 100 Girls Age 17 in the United States. She enjoys playing double sided tactical positions, however she is most proud of her long term positional victories. Her dedication as well as her patient and hardworking personality enable her to teach girls of all ages."
        }, {
            background: '#ccb086',
            imgSrc: require('../assets/vinesh-pfp.png'),
            imgBorderColor: '#694611',
            name: 'Vinesh Ravuri',
            title: 'Instructor',
            rating: '2300',
            role: "Vinesh, an incoming college freshman, is a US Chess National Master. Throughout his chess career, he has trained with many strong Grandmasters, which has helped him develop his distinct approach to chess. His day-to-day training schedule, focusing on tactical vision as well as positional nuances, has enabled him to reach his goals. Vinesh has won 2015 Cal States B section, tied for 1st in the 2015 US G/30 Championship B section, and tied for 2nd in the North American Open. When he began competitive chess, his rating witnessed a massive jump--from 600 to 2100 in less than two years--thanks to his dedication and training methods. He is confident that his students can accomplish the same."
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
                        title={props.rating}
                    />

                    <DetailsRow
                        icon='icon ion-ios-paper-outline'
                        title='About'
                        summary={props.role}
                    />
                </div>
        </div>
        );

        const styles = {
            cardHeader: {
                display: 'flex',
                height: '225px',
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
                        height={675}
                        width={600}
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
	            </div>
            </Center>
        )
    }
}