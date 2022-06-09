import React from 'react'
import Post from '../Post/Post'
import { ColumnContainer, FeedHeaderContainer, CreatePostContainer, FeedContainer, ActivityHeader  } from './ColumnTwo.styled'
import PostForm from '../Forms/PostForm'

// Imports Authorization
import Auth from '../../utils/auth';

// Allows use for both queries and mutations from our utils folder
import { useMutation, useQuery } from '@apollo/client';

// Gets Queries
// Gets the Karma Post
import { GET_LOCATIONS } from '../../utils/queries';

// Gets Mutations
// Allow for helpers

const data = [
{
    postTitle: 'Pirate Bay',
    postDescription: `Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl.`,
    postAuthor: 'Mary',
    postValue: 100,
    duration: 1,
    difficulty: 'Medium',
    createdAt: 'June 2, 2022',
    karmaHelpers: [
        {
            helperUsername: 'Bob'
        }
    ]
},
{
    postTitle: 'Pirating is Good for the Ocean',
    postDescription: `Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.`,
    postAuthor: 'Bob',
    postValue: 200,
    duration: 2,
    difficulty: 'Hard',
    createdAt: 'June 2, 2022',
    // karmaHelpers: [
    //     {
    //         helperUsername: 'Joe'
    //     }
    // ]
}
]

export default function ColumnTwo() {
    // Queries Karma Post data
    // Sets hooks for data loading
    // console.log('Column Two happened');
    // const { loadingKarmaPosts, dataKarmaPosts } = useQuery(GET_KARMAPOSTS);

    // const karmaPosts = dataKarmaPosts?.karmaPosts || [];

    // if(!karmaPosts) {
    // return null;
    // }

    // // Displays differently during loading
    // if (loadingKarmaPosts) {
    //     return <h2>LOADING...</h2>;
    // }

    // console.log('\n\nKARMAPOSTS:: \n\n', karmaPosts);

    return(
        <ColumnContainer>
            <FeedHeaderContainer>
                <CreatePostContainer>
                    <PostForm />
                </CreatePostContainer>
                <ActivityHeader>
                    <p>Activity</p>
                </ActivityHeader>
            </FeedHeaderContainer>
            <FeedContainer>

                { data.map((post) => 
                <Post data={post} />
                )}

            </FeedContainer>
        </ColumnContainer>
    )
}