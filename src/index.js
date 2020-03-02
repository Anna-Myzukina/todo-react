import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
    return (
    <ul>
        <li>Learn Hoe to create React</li>
        <li>Build Awesome App</li>
    </ul>
    );
};

const AppHeader = () => {
    return (
        <h1>My Todo list</h1>
    );
};

const el = (
<div>
    <AppHeader />
    <input placeholder="search"/>
    <TodoList />
</div>
);

ReactDom.render(el, document.getElementById('root'));
