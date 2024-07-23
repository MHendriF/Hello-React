import Friend from "./Friend";

export default function FriendList({ friends, onSelected, selectedFriend }) {
  return (
    <div className="friend-list">
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} onSelected={onSelected} selectedFriend={selectedFriend} />
      ))}
    </div>
  );
}
