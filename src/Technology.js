import React from 'react'
import FeaturedPost from './FeaturedPost';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';

const sections = [
    { title: 'Technology', url: '/tech' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];
  
const featuredPosts = [
    {
      title: 'Technology post',
      date: '10 Jun',
      description:
        'Let covid-19 end please',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];

export default function Technology() {
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* Header of the webpage */}
        <Header title="Blog" sections={sections} />
        {/* body of the webpage */}
        <br/>
        <div>
          <Grid container spacing={4} alignContent='center'>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>         
        </div>
      </Container>
        {/* footer of the webpage */}
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
    )
}
