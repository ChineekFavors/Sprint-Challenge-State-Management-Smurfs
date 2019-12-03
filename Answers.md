1. What problem does the context API help solve?
    context API helps to solve prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions are events that describe to the reducers what event occured and how to update store.
    reducers are pure functions that takes an action and state and return new state.
    store is known as a single source of truth in redux because it is the single source of state for all    the components and only why to change data is through dispatching an action.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    
    application state is state that is global, using redux store provider and connect for componets to have access to global state. where as Component state is state that is local to that component and if you want other components to have access to component state other component would have to be a child component nested inside the component state and child component could get access way of pass props downs


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk allow us to write action creators and preform async coding.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    my favorite state management system is redux, I like it because it is powerful and straight forward. I find it easy to work with and being able to give components access to global state with out prop drilling is less confusing.
