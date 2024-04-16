jest.autoMockOff();

describe('Collection utilities module', function() {
    var CollectionUtils = require('../CollectionUtils');

    var collectionTweetsMock = {
        collectionTweet7: {},
        collectionTweet8: {},
        collectionTweet9: {}
    }

    it('returns a number of tweets in collection', function getNumberOfTweetsInCollection() {
        var actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
        var exprectedNumberOfTweetsInCollection = 3;
        
        expectedNumberOfTweetsInCollection(actualNumberOfTweetsInCollection).toBe(exprectedNumberOfTweetsInCollection);
    })
});

it('checks if collection is not empty', function isNotEmptyCollection() {
    var actualIsEmptyCollectionValue = CollectionUtils.isNotEmptyCollection(collectionTweetsMock);

    expect(actualIsEmptyCollectionValue).toBeDefined();
    expect(actualIsEmptyCollectionValue).toBe(false);
    expect(actualIsEmptyCollectionValue).not.toBe(true);

})