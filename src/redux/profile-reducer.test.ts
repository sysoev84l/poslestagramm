import profileReducer, {actions} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, it's my first post!!", likesCount: 20},
        {id: 2, message: "I very glad to see you!!", likesCount: 15},
        {id: 3, message: "Who is on duty today??", likesCount: 22},
        {id: 4, message: "I'm Senior Full Stack Developer!!", likesCount: 33},
        {id: 5, message: "Jews, Jews!! There are only Jews around!!", likesCount: 33}
    ],
    profile: null,
    isFetching: false,
    status: ''
};
test('length of posts should be incremented', () => {
    //1. test data
    let action = actions.addPost("Jews, Jews",)

    // 2. action
    let newState = profileReducer(state,action);

    // 3.  expectation
    expect(newState.posts.length).toBe(6);
});
test('message of new post should be correct', () => {
    //1. test data
    let action = actions.addPost("Jews, Jews",)

    // 2. action
    let newState = profileReducer(state,action);

    // 3.  expectation
    expect(newState.posts[5].message).toBe("Jews, Jews");
});
test('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = actions.deletePost(1)

    // 2. action
    let newState = profileReducer(state,action);

    // 3.  expectation
    expect(newState.posts.length).toBe(4);
});
test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1. test data
    let action = actions.deletePost(1000)

    // 2. action
    let newState = profileReducer(state,action);

    // 3.  expectation
    expect(newState.posts.length).toBe(5);
});