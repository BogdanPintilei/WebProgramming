<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!-- inca 6 clase bootstrap -->

<xsl:template match="/">
<html>
	<head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
	</head>
	<body>
		<h2 class="page-header">A Movie Collection</h2>
		<table border="1" class="table table-striped table-hover table-condensed">
			<thead class="btn-primary ">
				<td class="danger">Movie</td><td class="info">Actors</td><td class="success">Genre</td><td>Date</td><td class="warning">Duration</td>
			</thead>
			<xsl:for-each select="movies/movie">
			<!-- <xsl:if test="date &gt;= 10 and date &lt;= 20"> -->
			<tr>
			      <td><xsl:value-of select="title"/></td>
			      <td>
					<xsl:for-each select="actors/actor">
						<xsl:value-of select="."/>,
					</xsl:for-each>
			      </td>
		              <td><xsl:value-of select="genre"/></td>
	       	              <td><xsl:value-of select="date"/></td>
	                      <td><xsl:value-of select="duration"/></td>
			</tr>
			<!-- </xsl:if> -->
			</xsl:for-each>
		</table>
	</body>
</html>
</xsl:template>

</xsl:stylesheet>
