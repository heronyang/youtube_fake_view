#!/bin/sh
rm paper.aux paper.bbl paper.blg paper.log
pdflatex -file-line-error paper.tex && bibtex paper && pdflatex paper.tex && pdflatex paper.tex && open paper.pdf
