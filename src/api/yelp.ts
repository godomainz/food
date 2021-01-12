import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer Xt8GlVjX5jTNcplYN6PLixSaxdCJFkzCF235R10quw1kKgLUSTEFhnZ07UG_9bIi8bQ9FNrxYqVR0CcbJeXMvpgfhTpmxLfsCH2Mms_SF8cYQy-3G1Sce8pTXBb9X3Yx'
    }
});