import React from 'react';

var Status = React.createClass({
    propTypes: {
        found: React.PropTypes.number.isRequired,
        max: React.PropTypes.number.isRequired,
        message: React.PropTypes.oneOf([
            'chooseTile', 'findMate', 'wrong', 'foundMate', 'foundAll'
        ]).isRequired
    },
    render: function () {
        var found = this.props.found,
            max = this.props.max,
            texts = {
                chooseTile: '选择一张卡片！',
                findMate: '现在我们来查找相对应的卡片！',
                wrong: '很遗憾，这两张卡片不一样！',
                foundMate: '耶✌️，他们是一样的！',
                foundAll: '成功咯，你已经找到所有' + max + '对卡片了！'
            };
        return (
            <p>({found}/{max})&nbsp;&nbsp;{texts[this.props.message]}</p>
        );
    }
});

module.exports = Status;