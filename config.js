var gentle_config = {

	default_plugins : [
		'plugins/find_in_sequence.js' ,
		'plugins/prepend_append_sequence.js' ,
		'plugins/export_as_file.js' ,
		'plugins/dna.js'
//		, 'plugins/alignments.js'
		, 'plugins/IDToligoanalyzer.js'
//		, 'plugins/alignments.js'
	] ,

	deactivated_plugins : [
	] ,

	colors : {
		numbering : '#6094DB',
		DRuMS : { 	A: '#2CA7DD',
					C: '#E6278A', 
					G: '#5EBC9A', 
					T: '#FAA327', 
					U: '#CC9900', 
					N: '#FF0000' 
		}
	} ,

	synbiota : {
		show_designer : false ,
		use_proxy : 1 ,
		api_version : 1 ,
		api_url : ''
	} ,

	use_pcr_module : true ,

	proxy : './data/proxy.php'

} ;
