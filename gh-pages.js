import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/dev-turtle/projectlunar_io_site.git', // Update to point to your repository
        user: {
            name: 'dev-turtle', // update to use your name
            email: 'devturtle@projectlunar.io' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);