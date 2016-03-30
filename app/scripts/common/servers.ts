// Created by baihuibo on 16/3/29.
import app from "./app";

app.factory("Test", function () {
    return {};
});

app.factory("TestPaging", function (resource) {
    return resource('data/paging.json');
});