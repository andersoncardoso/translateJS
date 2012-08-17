#! /usr/bin/env python
import sys
import codecs
import re

inp, out, lang = sys.argv[1:4]

with codecs.open(inp, encoding="utf-8") as f:
    file_, results = f.read(), []
    [results.extend(re.findall(r"[\"']([^'\"]*)[\"']", r)) for r in
        set([args[1] for args in re.findall(r"(trans|trans_p)\((.*)\)", file_)])]
    json = """translations = {
"%s": {""" % lang
    for i, r in enumerate(results):
        json += '''
    "%s": ""%s''' % (r, ',' if not i == len(results) - 1 else '')
    json += """}}"""
    with codecs.open(out, "w", encoding="utf-8") as fout:
        fout.write(json)

