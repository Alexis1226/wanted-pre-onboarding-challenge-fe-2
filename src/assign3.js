var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ToDo = [];
/**
 * 할 일을 추가, 내용없이 추가 불가
 * @param todo todo 객체
 */
function createToDo(todo) {
    ToDo.push(todo);
}
createToDo({
    id: "ee",
    content: "test",
    category: "DOING",
    isFinish: false
});
console.log(ToDo);
/**
 * 모든 할 일을 조회
 * ID를 기반으로 특정 할 일을 조회
 * @param id 특정 할 일을 조회할 경우 id 입력
 */
function readToDo(id) {
    if (!!id)
        return ToDo.filter(function (item) { return item.id === id; });
    else
        return ToDo;
}
/**
 * 특정 할 일의 특정 태그를 수정
 * @param {Id, tag} id: 수정할 ToDo의 id. tag : {id : 수정할 tag의 id, tag: 바꿀 tag 내용}
 */
function updateToDo(_a) {
    var id = _a.id, tag = _a.tag;
    if (!tag) {
        /**
         * @todo ID를 제외한 모든 속성을 수정 구현
         */
    }
    else {
        ToDo.filter(function (item) { return item.id === id; }).map(function (item) {
            var _a;
            return __assign(__assign({}, item), { tags: (_a = item.tags) === null || _a === void 0 ? void 0 : _a.map(function (oneTag) {
                    if (oneTag.id === tag.id)
                        return { id: id, tag: tag.tag };
                    else
                        return oneTag;
                }) });
        });
    }
}
function deleteToDo(_a) {
    var id = _a.id, tags = _a.tags;
    if (!!id) {
        if (!tags)
            // ID를 기반으로 특정 할 일을 삭제
            ToDo.filter(function (item) { return item.id !== id; });
        else if (tags && tags.length === 0)
            // 특정 할 일의 모든 태그를 제거
            ToDo.filter(function (item) {
                if (item.id === id)
                    return __assign(__assign({}, item), { tags: [] });
            });
        else if (tags && tags.length > 0)
            // 특정 할 일의 특정 태그를 삭제
            ToDo.filter(function (item) { return item.id === id; }).map(function (item) {
                var _a;
                var inputTagIds = tags.map(function (inputTag) { return inputTag.id; });
                var tobeTag = (_a = item.tags) === null || _a === void 0 ? void 0 : _a.filter(function (tag) {
                    return inputTagIds.some(function (id) { return id !== tag.id; });
                });
                return __assign(__assign({}, item), { tags: tobeTag });
            });
    }
}
