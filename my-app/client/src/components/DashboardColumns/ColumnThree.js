import React, { useState } from 'react'
import RecentKarmaReceived from '../RecentKarma/RecentKarmaReceived'
import RecentKarmaHelping from '../RecentKarma/RecentKarmaHelping'
// CSS components
import { ColumnContainer } from './ColumnThree.styled'
import { css } from 'styled-components';

// Imports Authorization
import Auth from '../../utils/auth';

// Allows use for both queries and mutations from our utils folder
import { useMutation, useQuery } from '@apollo/client';

// Gets Queries
// Gets the Karma Post
import { GET_ME } from '../../utils/queries';

// Imports util functions
const unDateFormatToUnix = require('../../utils/unDateFormatToUnix');

// Shows recent KarmaPost activity
export default function ColumnThree() {
    // Queries recent Karma posts
    // Filters by date created determining if data created it outside scope of 'recent'
    const { loading, data } = useQuery(GET_ME);

    const meData = data?.me || [];

    if (!meData) {
        return null;
    }

    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    // Gets array of all the karmapost where ME is a helper
    const karmaHelping = meData?.karmaHelping;

    // hours variable sets how far in the past the dates will be filtered.
    const hours = 3;
    const pastDate = Date.now() - (1000 * 60 * 60 * hours);

    // console.log('pasteDate and type of ', pastDate, ' ', typeof pastDate);
    // console.log('post.created at and type of ', karmaHelping[0].createdAt, ' ', typeof  karmaHelping[0].createdAt);
    console.log('uncode karmahelping', unDateFormatToUnix(karmaHelping[0].createdAt), ' ', typeof unDateFormatToUnix(karmaHelping[0].createdAt));
    // Filters a new array based on recent karma received and recent karmaPosts helping
    const recentKarmaHelpingArray = karmaHelping.filter((post) => unDateFormatToUnix(post.createdAt) > pastDate);
    const recentKarmaReceivedArray = recentKarmaHelpingArray.filter((post) => post.complete === true);

    return (
        <ColumnContainer>
        {/* Keys are generated with a string plus the index */}
        {/* Recent karma received after the postAuthor Completed the post */}
            <h3>Recent Karma Received:</h3>
            {recentKarmaReceivedArray.length === 0 &&
                <div>
                    No Karma Received Recently {':('}
                </div>}
            {recentKarmaReceivedArray.length > 0 &&
                recentKarmaReceivedArray.map((recentPost, index) =>
                    <RecentKarmaReceived karmaPostData={recentPost} key={`karmareceived${index}`}/>
                )
            }
            <h3>Recent Karma Helping:</h3>            
            {recentKarmaHelpingArray.length === 0 &&
                <div>
                    Go HELP somebody!! {':)'}
                </div>
            }

            {recentKarmaHelpingArray.length > 0 &&
                recentKarmaHelpingArray.map((recentPost, index) =>
                    <RecentKarmaHelping karmaPostData={recentPost} key={`karmahelping${index}`} />
                )
            }

        </ColumnContainer>
    )
}