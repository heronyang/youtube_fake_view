#!/bin/sh
pdflatex -file-line-error paper.tex && bibtex paper && pdflatex paper.tex && pdflatex paper.tex && open paper.pdf
