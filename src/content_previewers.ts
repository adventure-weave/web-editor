import {Converter} from 'showdown'

var sd_converter = new Converter()

export var markdown_previewer = sd_converter.makeHtml