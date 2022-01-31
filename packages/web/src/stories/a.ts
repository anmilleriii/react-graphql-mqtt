
// Design and implement a HitCounter class that keeps track of requests (or hits). It should support the following operations:

// record(timestamp): records a hit that happened at timestamp
// total(): returns the total number of hits recorded
// range(lower, upper): returns the number of hits that occurred between timestamps lower and upper (inclusive)
// Follow-up: What if our system has limited memory?

/**
 * Implement record(timestamp)
 * 
 * implement total() -> # hits
 * 
 * implement range(lower, upper) timestamps inclusive
 * 
 * sequential database
 * 2 arrays OR array with timestamp objects
 * 
 * 
 * 
 * 
 * time series database
 * limited memory 
 * 
 */


// interface Hit {
//     timestamp: number;
// }

type Hit = number;

class HitCounter {
    hits: Hit[];
    total: number;

    constructor(total: string) {
        this.hits = [];
        this.total = 0;
    }

    private record(timestamp: number) {
        this.hits.push(timestamp)
    }

    private range(lower: number, upper: number) {
        /**
         * Timestamps are monotonically increasing
         * 
         * could store just deltas 
         * or could store 
         */

    }
}

export {}