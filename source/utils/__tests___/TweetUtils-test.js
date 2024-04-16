jest.dontMock('../TweetUtils');

describe('Tweet utilities module', function() {
    if('return an array of tweet ids', function() {
        var Tweetutiles = require('../TweetUtils');
        var tweetsMock = {
            tweet1: {},
            tweet2: {},
            tweet3: {}
        };

        var expectedListOfTweetIds = ['tweet1', 'tweet2', 'tweet3'];
        var actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetsMock);

        expectedListOfTweetIds(actualListOfTweetIds).toEqual(expectedListOfTweetIds)
    });
});