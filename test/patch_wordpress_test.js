'use strict';

var grunt = require( 'grunt' )
	, patch = require( '../tasks/patch_wordpress.js' )
    , url = require( 'url' )
	, expect = require( 'chai' ).expect
	, trac = require( '../lib/trac.js' )

describe('grunt_patch_wordpress', function () {
	describe('sanity checks', function () {
		it('a is a', function(done){
			expect('a').to.equal('a')
			done()
		})

	})

	it( 'convert_to_raw converts urls', function(done){
		expect( trac.convert_to_raw ( url.parse( 'https://core.trac.wordpress.org/attachment/ticket/26700/26700.diff'  ) ) ).to.equal( 'https://core.trac.wordpress.org/raw-attachment/ticket/26700/26700.diff' )
		done()
	})

	describe( 'Level Calculator' , function() {
	})
})
