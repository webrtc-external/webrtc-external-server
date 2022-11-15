
// for  metrics

import {Gauge,Counter, Histogram, Summary} from 'prom-client'

const scrape_counter =  new Counter({
	name: 'scrape_counter',
	help: 'Number of scrapes (example of a counter with a collect fn)',
	collect() {
		// collect is invoked each time `register.metrics()` is called.
		this.inc();
	},
});

const user_counter =  new Counter({
    name:'user_count',
    help:'User Count',
});

user_counter.inc(10);


const session_counter = new Counter({
    name:'session_count',
    help:'Session Count',
})

session_counter.inc(100)


export {
    user_counter,
    session_counter,
    scrape_counter
}