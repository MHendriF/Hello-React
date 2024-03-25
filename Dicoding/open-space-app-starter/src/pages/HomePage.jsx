import React, { useEffect } from 'react';
import TalkInput from '../components/TalkInput';
import TalksList from '../components/TalksList';

function HomePage() {
  const {
    talks = [],
    users = [],
    authUser,
  } = {}; // @TODO: get talks, users, and authUser state from store

  const dispatch = null; // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to populate talks and users data

  }, [dispatch]);

  const onAddTalk = (text) => {
    // @TODO: dispatch async action to add talk

  };

  const onLike = (id) => {
    // @TODO: dispatch async action to toggle like talk
  };

  const talkList = talks.map((talk) => ({
    ...talk,
    user: users.find((user) => user.id === talk.user),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <TalkInput addTalk={onAddTalk} />
      <TalksList talks={talkList} like={onLike} />
    </section>
  );
}

export default HomePage;
