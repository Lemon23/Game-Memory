import React from 'react';
import ReactDOM from 'react-dom';
var _ = require('lodash');

var WordForm = React.createClass({
    // 需要提供 onWordsEntered 方法，用于触发提交方法，在 Game 中我们使用了 startGame
    propTypes: {
        onWordsEntered: React.PropTypes.func.isRequired
    },
    // 初始化 error 状态
    getInitialState: function () {
        return {error: undefined};
    },
    // 显示错误信息，2s 后自动消失
    setError: function (msg) {
        this.setState({error: msg});
        setTimeout(function () {
            this.setState({error: ''});
        }.bind(this), 2000);
    },
    // 提交文字信息，判断是否符合条件
    submitWords: function (e) {
        e.preventDefault();

        var node = ReactDOM.findDOMNode(this.refs.words);
        // unique 用于生成唯一的字符
        var words = _.uniq((node.value || '').trim().split(''));

        if (words.length < 3) {
            this.setError('至少输入3个不同的字符！');
        } else {
            this.props.onWordsEntered(words);
            node.value = '';
        }
    },
    render: function () {
        return (
            <form className='form-inline' onSubmit={this.submitWords}>
                <span>Enter：</span>
                <input className='form-control' type='text' ref='words' maxLength='10'
                    defaultValue='Game' />
                <button className='btn btn-default' type='submit'>Start</button>
                <p className='error'>{this.state.error}</p>
            </form>
        );
    }
});

module.exports = WordForm;